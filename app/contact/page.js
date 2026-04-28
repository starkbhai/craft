export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '64px 24px', maxWidth: '800px' }}>
      <h1 className="text-section-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>Contact Us</h1>
      <p className="text-body-medium text-ash" style={{ textAlign: 'center', marginBottom: '48px' }}>
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div style={{ 
        backgroundColor: 'var(--palette-bg-canvas)',
        border: '1px solid var(--palette-border-hairline)',
        borderRadius: '14px',
        padding: '32px',
        boxShadow: 'rgba(0, 0, 0, 0.04) 0 2px 6px 0'
      }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label className="text-body-medium">Full Name</label>
            <input type="text" className="input-text" placeholder="John Doe" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label className="text-body-medium">Email Address</label>
            <input type="email" className="input-text" placeholder="john@example.com" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label className="text-body-medium">Message</label>
            <textarea 
              className="input-text" 
              placeholder="How can we help you?"
              style={{ minHeight: '150px', resize: 'vertical' }}
            />
          </div>

          <button type="button" className="btn-primary" style={{ marginTop: '16px' }}>
            Send Message
          </button>
        </form>
      </div>

      <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 className="text-subtitle" style={{ marginBottom: '8px' }}>Call Us</h3>
          <p className="text-body-medium text-ash">+91 - 9057548903</p>
        </div>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 className="text-subtitle" style={{ marginBottom: '8px' }}>Email</h3>
          <p className="text-body-medium text-ash">dikraftindia@hotmail.com</p>
        </div>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 className="text-subtitle" style={{ marginBottom: '8px' }}>Address</h3>
          <p className="text-body-medium text-ash">82 A KASTURBA NAAGR<br/>NIRMAN NAGAR, Jaipur, 302019</p>
        </div>
      </div>
    </div>
  );
}
