export function FallbackPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0b0c09',
      color: '#f4f0df',
      fontFamily: 'sans-serif',
      padding: '40px',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Something went wrong.</h1>
      <p style={{ color: '#aaa28a', marginBottom: '32px' }}>
        Please refresh the page or contact me directly.
      </p>
      <a
        href="mailto:shingavineel@gmail.com"
        style={{
          padding: '12px 24px',
          background: '#bff205',
          color: '#0b0c09',
          fontWeight: '800',
          textDecoration: 'none',
        }}
      >
        Email Neel Directly
      </a>
    </div>
  );
}
