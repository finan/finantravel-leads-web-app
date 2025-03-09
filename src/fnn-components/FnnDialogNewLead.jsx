import { useState } from 'react';
import { Button } from '@/components/button';
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from '@/components/dialog';
import { Description, Field, Label } from '@/components/fieldset';
import { Input } from '@/components/input';
import PropTypes from 'prop-types';

function FnnDialogNewLead({ isOpen, onClose, addNewLead }) {
  // State untuk menyimpan data form sebelum dikirim
  const [formData, setFormData] = useState({
    trip_name: '',
    client_name: '',
    email: '',
    whatsapp: '',
  });

  // Meng-handle perubahan input dalam form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Meng-handle submit form dan mengirim data lead baru
  const handleSubmit = () => {
    if (
      !formData.trip_name ||
      !formData.client_name ||
      !formData.email ||
      !formData.whatsapp
    ) {
      return; // Mencegah submit jika ada field yang kosong
    }
    addNewLead(formData); // Menambahkan lead baru ke daftar
    setFormData({ trip_name: '', client_name: '', email: '', whatsapp: '' }); // Reset form setelah submit
    onClose(); // Menutup modal setelah submit
  };

  return (
    <Dialog size="xl" open={isOpen} onClose={onClose}>
      <DialogTitle>Add New Lead</DialogTitle>
      <DialogDescription>
        Fill in the details to add a new lead.
      </DialogDescription>
      <DialogBody>
        <div className="flex flex-col gap-5">
          {/* Input untuk nama trip */}
          <Field>
            <Label>Trip Name</Label>
            <Description>
              Enter the trip name (e.g., Mount Fuji Tour).
            </Description>
            <Input
              type="text"
              name="trip_name"
              placeholder="Enter trip name"
              value={formData.trip_name}
              onChange={handleChange}
            />
          </Field>

          {/* Input untuk nama klien */}
          <Field>
            <Label>Client Name</Label>
            <Description>
              Enter the client’s full name (e.g., John Doe).
            </Description>
            <Input
              name="client_name"
              placeholder="Enter client name"
              value={formData.client_name}
              onChange={handleChange}
            />
          </Field>

          {/* Input untuk email klien */}
          <Field>
            <Label>Email</Label>
            <Description>
              Enter the client’s email (e.g., john.doe@example.com).
            </Description>
            <Input
              type="email"
              name="email"
              placeholder="Enter client email"
              value={formData.email}
              onChange={handleChange}
            />
          </Field>

          {/* Input untuk nomor WhatsApp klien */}
          <Field>
            <Label>WhatsApp Number</Label>
            <Input
              type="tel"
              name="whatsapp"
              placeholder="Enter client WhatsApp number"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </Field>
        </div>
      </DialogBody>
      <DialogActions>
        <Button plain onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Submit a new lead</Button>
      </DialogActions>
    </Dialog>
  );
}

FnnDialogNewLead.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  addNewLead: PropTypes.func.isRequired,
};

export default FnnDialogNewLead;
