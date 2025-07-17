const GridOverlay = ({ show }) => (
  show && (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="w-full h-full opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)',
            backgroundSize: '8px 8px',
          }}
        />
      </div>
    </div>
  )
);

export default GridOverlay; 