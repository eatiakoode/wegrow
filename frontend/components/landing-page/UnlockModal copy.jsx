import { useState } from "react";

const UnlockModal = ({ onClose, onUnlock }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can do an API call if needed
    onUnlock(); // Unlock and close modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Begin Your Dream Home Plan</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose} className="cancel-btn"><span className="flaticon-close"></span></button>
        </form>
      </div>

      
    </div>
  );
};

export default UnlockModal;
