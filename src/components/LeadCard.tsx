import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Edit, Trash2 } from 'lucide-react';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'cold' | 'warm' | 'hot' | 'closed';
  value: number;
  source: string;
  lastContact: string;
}

interface LeadCardProps {
  lead: Lead;
  onEdit: (lead: Lead) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Lead['status']) => void;
}

const LeadCard: React.FC<LeadCardProps> = ({ lead, onEdit, onDelete, onStatusChange }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'bg-red-500';
      case 'warm': return 'bg-yellow-500';
      case 'cold': return 'bg-blue-500';
      case 'closed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const statusOptions: Lead['status'][] = ['cold', 'warm', 'hot', 'closed'];

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{lead.name}</h3>
            <p className="text-sm text-gray-600">{lead.company}</p>
          </div>
          <div className="flex space-x-1">
            <Button variant="ghost" size="sm" onClick={() => onEdit(lead)}>
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onDelete(lead.id)}>
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2 text-sm">
          <Mail className="w-4 h-4 text-gray-400" />
          <span>{lead.email}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Phone className="w-4 h-4 text-gray-400" />
          <span>{lead.phone}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {statusOptions.map((status) => (
              <Button
                key={status}
                variant={lead.status === status ? "default" : "outline"}
                size="sm"
                className={`h-6 text-xs ${lead.status === status ? getStatusColor(status) : ''}`}
                onClick={() => onStatusChange(lead.id, status)}
              >
                {status.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t">
          <Badge variant="outline">{lead.source}</Badge>
          <span className="font-semibold text-green-600">${lead.value.toLocaleString()}</span>
        </div>
        
        <p className="text-xs text-gray-500">Last contact: {lead.lastContact}</p>
      </CardContent>
    </Card>
  );
};

export default LeadCard;