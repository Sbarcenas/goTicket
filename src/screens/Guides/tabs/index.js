import Feeding from './Feeding';
import FirstAid from './FirstAid';
import Lactation from './Lactation';
import NewlyBorn from './NewlyBorn';
import Pregnancy from './Pregnancy';
import Sleeping from './Sleeping';
import SphincterControl from './SphincterControl';
import VaccineControl from './VaccineControl';
import Security from './Security';

export {default as Feeding} from './Feeding';
export {default as FirstAid} from './FirstAid';
export {default as Lactation} from './Lactation';
export {default as NewlyBorn} from './NewlyBorn';
export {default as Pregnancy} from './Pregnancy';
export {default as Sleeping} from './Sleeping';
export {default as SphincterControl} from './SphincterControl';
export {default as VaccineControl} from './VaccineControl';

export const GUIDES_COMPONENT_LIST = {
  feeding: Feeding,
  firstAid: FirstAid,
  lactation: Lactation,
  newlyBorn: NewlyBorn,
  pregnancy: Pregnancy,
  sleeping: Sleeping,
  sphincterControl: SphincterControl,
  vaccineControl: VaccineControl,
  security: Security,
};
