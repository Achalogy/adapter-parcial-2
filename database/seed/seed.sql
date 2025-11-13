-- CreateTable
CREATE TABLE "employee" (
    "employee_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("employee_id")
);

INSERT INTO employee (employee_id, name, surname, salary) VALUES
  ('EMP-001', 'Laura', 'García', 3500.00),
  ('EMP-002', 'Carlos', 'Pérez', 4200.00),
  ('EMP-003', 'María', 'Rodríguez', 3900.00),
  ('EMP-004', 'Andrés', 'López', 2800.00),
  ('EMP-005', 'Sofía', 'Martínez', 5100.00);
