export default function Loading() {
  return (
    <div className="loading">
      <svg className="spinner"  width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M9.15076 9.15076C11.4941 6.80739 14.3588 5.0519 17.5106 4.02781C20.6625 3.00372 24.0119 2.74012 27.2851 3.25855C30.5583 3.77697 33.6624 5.06271 36.3435 7.01065C39.0246 8.95858 41.2066 11.5134 42.7111 14.4662C44.2157 17.419 45 20.686 45 24C45 27.314 44.2157 30.581 42.7111 33.5338C41.2066 36.4866 39.0246 39.0414 36.3435 40.9894C33.6624 42.9373 30.5583 44.223 27.2851 44.7415" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Loading...
    </div>
  )
}
