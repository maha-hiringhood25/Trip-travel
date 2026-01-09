export default function ContactCTA() {
  return (
    <div className="contact-cta">
      <h2>Ready to plan your trip?</h2>
      <p className="cta-text">
        Tell us where you want to go and we’ll help you structure your ideal itinerary.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thanks! We will get in touch soon.');
        }}
        className="cta-form"
      >
        <input
          type="text"
          name="destination"
          placeholder="Destination (e.g., Goa, Kyoto)"
          required
          className="cta-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="cta-input"
        />
        <button className="btn" type="submit">Get itinerary</button>
      </form>
    </div>
  );
}



