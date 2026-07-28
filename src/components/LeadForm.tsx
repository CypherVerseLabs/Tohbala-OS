import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Lead } from './LeadCard';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Lead, 'id'>) => void;
  initialData?: Lead;
}

const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
  const { register, handleSubmit, reset, setValue, watch } = useForm<Omit<Lead, 'id'>>({
    defaultValues: initialData || {
      name: '',
      email: '',
      phone: '',
      company: '',
      status: 'cold',
      value: 0,
      source: '',
      lastContact: new Date().toISOString().split('T')[0]
    }
  });

  const status = watch('status');

  const handleFormSubmit = (data: Omit<Lead, 'id'>) => {
    onSubmit(data);
    reset();
    onClose();
  };

  const sources = ['Google Ads', 'Facebook', 'Instagram', 'Organic', 'Referral', 'Cold Call', 'Email'];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{initialData ? 'Edit Lead' : 'Add New Lead'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register('name', { required: true })} />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" {...register('company')} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email', { required: true })} />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register('phone')} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="value">Value ($)</Label>
              <Input id="value" type="number" {...register('value', { valueAsNumber: true })} />
            </div>
            <div>
              <Label htmlFor="source">Source</Label>
              <Select onValueChange={(value) => setValue('source', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  {sources.map((source) => (
                    <SelectItem key={source} value={source}>{source}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="status">Status</Label>
            <Select onValueChange={(value) => setValue('status', value as Lead['status'])}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cold">Cold</SelectItem>
                <SelectItem value="warm">Warm</SelectItem>
                <SelectItem value="hot">Hot</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="bg-gradient-to-r from-teal-500 to-purple-600">
              {initialData ? 'Update' : 'Create'} Lead
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;