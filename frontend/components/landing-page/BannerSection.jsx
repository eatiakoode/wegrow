'use client'
// import Image from 'next/image';
import { useState } from 'react';

export default function BannerSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full Name Is Required';
    if (!form.email.trim()) newErrors.email = 'Email Is Required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number Is Required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission (API call or similar)
      setSubmitted(true);
    }
  };

  return (
    <section className="banner-two" id="homein">
      <div
        className="banner-two_image"
        style={{ backgroundImage: 'url(/assets/images/slide1.webp)' }}
      ></div>
      <div className="container">
        <div className="banner-two_content">
          <div className="banner-two_content-inner">
            <div className="banner-two_title">M3M Crown</div>
            <h1 className="banner-two_heading">
              Find Your <br /> <span>Perfect Home </span>Today
            </h1>

            <div className="banner-tabs">
              <div className="prod-tabs tabs-box">
                <ul className="tab-btns tab-buttons clearfix">
                  <li className="tab-btn active-btn">Enquire Now</li>
                </ul>

                <div className="tabs-content">
                  <div className="tab active-tab" id="prod-buy">
                    <div className="content">
                    <div className="default-form">
                      <form onSubmit={handleSubmit}>
                        <input type="hidden" name="formname" value="Enquire Now" />
                        <div className="row clearfix bannerform">
                          <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                            <input
                              type="text"
                              name="name"
                              placeholder="Full Name"
                              value={form.name}
                              onChange={handleChange}
                            />
                            {errors.name && (
                              <span className="error" style={{ color: 'red', marginTop: 5 }}>
                                {errors.name}
                              </span>
                            )}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email Address"
                              value={form.email}
                              onChange={handleChange}
                            />
                            {errors.email && (
                              <span className="error" style={{ color: 'red', marginTop: 5 }}>
                                {errors.email}
                              </span>
                            )}
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone Number"
                              maxLength={10}
                              value={form.phone}
                              onChange={handleChange}
                            />
                            {errors.phone && (
                              <span className="error" style={{ color: 'red', marginTop: 5 }}>
                                {errors.phone}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="button-box">
                          <button type="submit" className="submit-btn">
                            Connect Now
                          </button>
                        </div>
                        {submitted && (
                          <div id="landing_form_massage1" style={{ marginTop: 10, color: 'green' }}>
                            Thank you for your enquiry!
                          </div>
                        )}
                      </form>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-amenities">
                <ul>
                  <li>
                    <i className="flaticon-tick me-2"></i>4.9/5 Rating by Customer
                  </li>
                  <li>
                    <i className="flaticon-tick me-2"></i>500+ Customer Served
                  </li>
                  <li>
                    <i className="flaticon-tick me-2"></i>Best Price Guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

