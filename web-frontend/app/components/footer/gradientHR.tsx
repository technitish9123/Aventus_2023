const GradientHR: React.FC = () => (
  <div className={`grid grid-cols-2`}>
    <hr
      className={`h-1 border-none bg-gradient-to-r from-hash-light to-primary-vermilion dark:from-hash-dark dark:to-primary-vermilion`}
    />
    <hr
      className={`h-1 border-none bg-gradient-to-l from-hash-light to-primary-vermilion dark:from-hash-dark dark:to-primary-vermilion`}
    />
  </div>
);

export default GradientHR;
