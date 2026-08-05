export default function ContactInfoSection({
    officeTitle = "Our Office",
    officeAddress = "123 Travel Street, Downtown, New York, USA",

    phone1 = "+1 234 567 890",
    phone2 = "+1 987 654 321",

    email = "info@myxperttrion.com",

    workingHours = "24/7 Customer Support",
    supportText = "Always Available",
}) {
    return (
        <section className="section-15 py-xl-5 py-4">
            <div className="container py-xl-4 py-4">

                <div className="row g-4">

                    <div className="col-lg-3 col-md-6">
    <div className="info-card">
        <div className="icon">
            <i className="bi bi-geo-alt-fill"></i>
        </div>

        <span className="small-title">VISIT US</span>

        <h4>Head Office</h4>

        <p>
            MyXpertTrion Travel Hub<br />
            Jaipur, Rajasthan, India
        </p>
    </div>
</div>

<div className="col-lg-3 col-md-6">
    <div className="info-card">
        <div className="icon">
            <i className="bi bi-telephone-fill"></i>
        </div>

        <span className="small-title">CALL US</span>

        <h4>Travel Assistance</h4>

        <p>+91 98765 43210</p>
        <p>+91 98765 43211</p>
    </div>
</div>

<div className="col-lg-3 col-md-6">
    <div className="info-card">
        <div className="icon">
            <i className="bi bi-envelope-fill"></i>
        </div>

        <span className="small-title">EMAIL US</span>

        <h4>Customer Support</h4>

        <p>hello@myxperttrion.com</p>
    </div>
</div>

<div className="col-lg-3 col-md-6">
    <div className="info-card">
        <div className="icon">
            <i className="bi bi-headset"></i>
        </div>

        <span className="small-title">SUPPORT</span>

        <h4>Always Available</h4>

        <p>Dedicated Travel Experts</p>
        <p>7 Days A Week Support</p>
    </div>
</div>

                </div>

            </div>
        </section>
    );
}