import ThumbNail from './ThumbNail';
import FlipMove from 'react-flip-move';
const Results = ({ results }) => {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((r) => (
        <ThumbNail key={r.id} result={r} />
      ))}
    </FlipMove>
  );
};

export default Results;
