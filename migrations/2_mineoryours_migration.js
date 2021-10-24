// eslint-disable-next-line no-undef
const MineOrYoursContract = artifacts.require('MineOrYours');

module.exports = async (deployer) => {
  deployer.deploy(MineOrYoursContract);
}
