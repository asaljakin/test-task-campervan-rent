import { useSelector } from 'react-redux';
import { selectCampers } from '../../../redux/selectors';
import { CampersCard } from '../CampersCard/CampersCard';

export const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <div>
      <ul>
        {campers.map(item => (
          <CampersCard key={item._id} value={item} />
        ))}
      </ul>
    </div>
  );
};
