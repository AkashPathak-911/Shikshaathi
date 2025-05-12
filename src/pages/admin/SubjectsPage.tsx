import React, { useState } from 'react';
import { useSubjects } from '../../context/SubjectContext';
import { useLanguage } from '../../context/LanguageContext';
import { supabase, Subject } from '../../lib/supabase';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export default function SubjectsPage() {
  const { subjects, loading, error, refreshSubjects } = useSubjects();
  const { language } = useLanguage();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newSubject, setNewSubject] = useState(false);
  
  const [formData, setFormData] = useState({
    name_en: '',
    name_np: '',
    level: 'school',
    order: 0,
    active: true
  });

  const handleEdit = (subject: Subject) => {
    setFormData(subject);
    setEditingId(subject.id);
    setNewSubject(false);
  };

  const handleAdd = () => {
    setFormData({
      name_en: '',
      name_np: '',
      level: 'school',
      order: subjects.length,
      active: true
    });
    setNewSubject(true);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewSubject(false);
    setFormData({
      name_en: '',
      name_np: '',
      level: 'school',
      order: 0,
      active: true
    });
  };

  const handleSave = async () => {
    try {
      if (newSubject) {
        const { error } = await supabase
          .from('subjects')
          .insert([formData]);
        if (error) throw error;
      } else if (editingId) {
        const { error } = await supabase
          .from('subjects')
          .update(formData)
          .eq('id', editingId);
        if (error) throw error;
      }
      
      await refreshSubjects();
      handleCancel();
    } catch (err) {
      console.error('Error saving subject:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this subject?')) return;
    
    try {
      const { error } = await supabase
        .from('subjects')
        .delete()
        .eq('id', id);
      if (error) throw error;
      await refreshSubjects();
    } catch (err) {
      console.error('Error deleting subject:', err);
    }
  };

  if (loading) return <div className="p-4">Loading subjects...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Subjects</h1>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Subject
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name (English)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name (Nepali)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {(newSubject || subjects).map((subject: Subject | any) => (
              <tr key={subject.id || 'new'}>
                {editingId === subject.id || (newSubject && !subject.id) ? (
                  <>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={formData.name_en}
                        onChange={(e) => setFormData({ ...formData, name_en: e.target.value })}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white sm:text-sm"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={formData.name_np}
                        onChange={(e) => setFormData({ ...formData, name_np: e.target.value })}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white sm:text-sm"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white sm:text-sm"
                      >
                        <option value="school">School</option>
                        <option value="entrance">Entrance</option>
                        <option value="bachelor">Bachelor</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        value={formData.order}
                        onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                        className="block w-20 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white sm:text-sm"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={formData.active.toString()}
                        onChange={(e) => setFormData({ ...formData, active: e.target.value === 'true' })}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-white sm:text-sm"
                      >
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={handleSave}
                        className="inline-flex items-center p-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Save className="h-4 w-4" />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="inline-flex items-center p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4">{subject.name_en}</td>
                    <td className="px-6 py-4">{subject.name_np}</td>
                    <td className="px-6 py-4 capitalize">{subject.level}</td>
                    <td className="px-6 py-4">{subject.order}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        subject.active
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {subject.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(subject)}
                        className="inline-flex items-center p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(subject.id)}
                        className="inline-flex items-center p-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}