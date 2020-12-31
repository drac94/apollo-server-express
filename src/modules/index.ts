import makeExecutableSchemaFromModules from '../utils/modules';

import auth from './auth';

export default makeExecutableSchemaFromModules({
  modules: [auth],
});
