/*
  # Create subjects table and security policies

  1. New Tables
    - `subjects`
      - `id` (uuid, primary key)
      - `name_en` (text, English name)
      - `name_np` (text, Nepali name)
      - `level` (text, education level)
      - `order` (integer, display order)
      - `active` (boolean, subject visibility)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `subjects` table
    - Add policies for:
      - Public read access for active subjects
      - Admin-only write access
*/

-- Drop existing policies if they exist
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Public can view active subjects" ON subjects;
    DROP POLICY IF EXISTS "Admins can manage subjects" ON subjects;
EXCEPTION
    WHEN undefined_object THEN NULL;
END $$;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_subjects_updated_at ON subjects;

-- Drop existing function if it exists
DROP FUNCTION IF EXISTS update_updated_at_column();

-- Create or update the subjects table
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'subjects') THEN
        CREATE TABLE subjects (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            name_en text NOT NULL,
            name_np text NOT NULL,
            level text NOT NULL,
            "order" integer NOT NULL DEFAULT 0,
            active boolean NOT NULL DEFAULT true,
            created_at timestamptz NOT NULL DEFAULT now(),
            updated_at timestamptz NOT NULL DEFAULT now()
        );
    ELSE
        -- Add active column if it doesn't exist
        IF NOT EXISTS (
            SELECT FROM information_schema.columns 
            WHERE table_schema = 'public' 
            AND table_name = 'subjects' 
            AND column_name = 'active'
        ) THEN
            ALTER TABLE subjects ADD COLUMN active boolean NOT NULL DEFAULT true;
        END IF;
    END IF;
END $$;

-- Enable RLS
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can view active subjects"
    ON subjects
    FOR SELECT
    USING (active = true);

CREATE POLICY "Admins can manage subjects"
    ON subjects
    USING (auth.role() = 'admin');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_subjects_updated_at
    BEFORE UPDATE ON subjects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();