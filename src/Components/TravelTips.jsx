export default function TravelTips() {
  const tips = [
    { title: 'Pack light, layer smart', text: 'Versatile layers beat bulky outfits. Roll clothes to save space.' },
    { title: 'Book in shoulder seasons', text: 'Lower prices, fewer crowds, great weather in many destinations.' },
    { title: 'Stay near transit', text: 'Save time and money by being walkable to trains or buses.' },
    { title: 'Offline essentials', text: 'Download maps, tickets, and translations before you go.' },
  ];

  return (
    <>
      <h2>Travel tips</h2>
      <div className="grid">
        {tips.map((t) => (
          <div className="tip" key={t.title}>
            <strong>{t.title}</strong>
            <p style={{ color: '#9ca3af', marginTop: '0.35rem' }}>{t.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
