


const getEnvVar = envVarName => process.env[envVarName];

const getRegion = () => getEnvVar('region');

const getLandscape = () => getEnvVar('LANDSCAPE');

module.exports = {
  getEnvVar: getEnvVar,
  getRegion: getRegion,
  getLandscape: getLandscape
};