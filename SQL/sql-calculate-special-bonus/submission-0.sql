-- Write your query below
SELECT 
    employee_id,
    CASE
        WHEN employee_id % 2 = 1 AND name not Like 'M%' Then Salary
        ELSE 0
    END AS bonus
from employees
Order By employee_id;
