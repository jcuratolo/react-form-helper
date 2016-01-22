export default function formConfig(cfg) {
  const requiredProps = [
    'fields',
    'name',
    'validateForm'
  ].forEach(prop => {
    if (cfg[prop] === undefined) {
      throw `${prop} cannot be undefined`;
    }
  });

  if (!Array.isArray(cfg.fields)) {
    throw 'fields must be an array';
  }

  if (typeof cfg.name !== 'string') {
    throw 'name must be a string';
  }

  if (typeof cfg.validateForm !== 'function') {
    throw 'validateForm must be a function';
  }

  const validatedCfg =  Object.assign({}, cfg);

  return validatedCfg;
}
