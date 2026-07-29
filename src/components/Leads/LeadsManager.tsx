import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search, Filter } from 'lucide-react';
import LeadCard, { Lead } from './LeadCard';
import LeadForm from './LeadForm';

const LeadsManager: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john@techcorp.com',
      phone: '(555) 123-4567',
      company: 'Tech Corp',
      status: 'hot',
      value: 5000,
      source: 'Google Ads',
      lastContact: '2024-01-15'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@designstudio.com',
      phone: '(555) 987-6543',
      company: 'Design Studio',
      status: 'warm',
      value: 3200,
      source: 'Facebook',
      lastContact: '2024-01-14'
    },
    {
      id: '3',
      name: 'Mike Wilson',
      email: 'mike@retailplus.com',
      phone: '(555) 456-7890',
      company: 'Retail Plus',
      status: 'cold',
      value: 1800,
      source: 'Referral',
      lastContact: '2024-01-13'
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | undefined>();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddLead = (leadData: Omit<Lead, 'id'>) => {
    const newLead: Lead = {
      ...leadData,
      id: Date.now().toString()
    };
    setLeads([...leads, newLead]);
  };

  const handleEditLead = (leadData: Omit<Lead, 'id'>) => {
    if (editingLead) {
      setLeads(leads.map(lead => 
        lead.id === editingLead.id ? { ...leadData, id: editingLead.id } : lead
      ));
      setEditingLead(undefined);
    }
  };

  const handleDeleteLead = (id: string) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  const handleStatusChange = (id: string, status: Lead['status']) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status } : lead
    ));
  };

  const openEditForm = (lead: Lead) => {
    setEditingLead(lead);
    setIsFormOpen(true);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leads & Clients</h1>
          <p className="text-gray-600">Manage your sales pipeline and client relationships</p>
        </div>
        <Button 
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-teal-500 to-purple-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Lead
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="cold">Cold</SelectItem>
            <SelectItem value="warm">Warm</SelectItem>
            <SelectItem value="hot">Hot</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLeads.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={lead}
            onEdit={openEditForm}
            onDelete={handleDeleteLead}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      <LeadForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingLead(undefined);
        }}
        onSubmit={editingLead ? handleEditLead : handleAddLead}
        initialData={editingLead}
      />
    </div>
  );
};

export default LeadsManager;