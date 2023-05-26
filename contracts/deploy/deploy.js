
// Just a standard hardhat-deploy deployment definition file!
const func = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();


	await deploy('GreenDAO', {
		from: deployer,
		log: true,
	});
};

module.exports = func;