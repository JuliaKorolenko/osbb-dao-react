import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

module.exports = buildModule("OSBB_DAO_Module", (m) => {
  const osbbAdmin = m.getAccount(0);

  // ========== ДЕПЛОЙ DAO ==========
  // Конструктор автоматично надає osbbAdmin роль ADMIN_ROLE
  const osbbDAO = m.contract("OSBB_DAO", []);

  // ========== РЕЄСТРАЦІЯ МЕШКАНЦІВ ==========
  // Реєструємо самого адміна як мешканця з квартирою 100 м²
  m.call(osbbDAO, "registerResident", [osbbAdmin, 100], {
    id: "register_admin",
    from: osbbAdmin, // Викликає адмін
  });

  // ========== ПОПОВНЕННЯ ФОНДУ (опційно) ==========
  // Додаємо початкові кошти у фонд ОСББ (10 ETH)
  m.call(osbbDAO, "depositFunds", [], {
    id: "initial_deposit",
    value: BigInt(10n * 10n ** 18n), // 10 ETH
    from: osbbAdmin,
  });

  return { osbbDAO };
});
