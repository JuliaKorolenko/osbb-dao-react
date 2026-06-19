export const mapResidentInfo = (residentInfo: [bigint, bigint, boolean]) => {
  const [votingPower, apartmentArea, isActive] = residentInfo;
  return {
    votingPower: Number(votingPower),
    area: Number(apartmentArea),
    isActive: isActive,
  };
};
