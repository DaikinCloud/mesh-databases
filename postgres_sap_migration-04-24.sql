UPDATE commerce.branches
SET branch_type = 'TEMP_INACTIVE'
WHERE branch_number IN (
  '702', '706', '724', '730', '746', '790', '794', '764', '748', '772',
  '732', '752', '722', '786', '795', '796', '708', '712', '726', '744',
  '754', '758', '760', '762', '768', '770', '778', '792', '793', '826'
);

UPDATE commerce.branches
SET
  branch_type = 'ACT',
  sap_enabled = TRUE,
  sap_branch_number = CASE branch_number
    WHEN '702' THEN '4702'
    WHEN '706' THEN '4706'
    WHEN '724' THEN '4724'
    WHEN '730' THEN '4730'
    WHEN '746' THEN '4746'
    WHEN '790' THEN '4790'
    WHEN '794' THEN '4794'
    WHEN '764' THEN '4764'
    WHEN '748' THEN '4748'
    WHEN '772' THEN '4772'
    WHEN '732' THEN '4732'
    WHEN '752' THEN '4752'
    WHEN '722' THEN '4722'
    WHEN '786' THEN '4786'
    WHEN '795' THEN '4795'
    WHEN '796' THEN '4796'
    WHEN '708' THEN '4708'
    WHEN '712' THEN '4712'
    WHEN '726' THEN '4726'
    WHEN '744' THEN '4744'
    WHEN '754' THEN '4754'
    WHEN '758' THEN '4758'
    WHEN '760' THEN '4760'
    WHEN '762' THEN '4762'
    WHEN '768' THEN '4768'
    WHEN '770' THEN '4770'
    WHEN '778' THEN '4778'
    WHEN '792' THEN '4792'
    WHEN '793' THEN '4793'
    WHEN '826' THEN '4826'
  END
WHERE branch_number IN (
  '702', '706', '724', '730', '746', '790', '794', '764', '748', '772',
  '732', '752', '722', '786', '795', '796', '708', '712', '726', '744',
  '754', '758', '760', '762', '768', '770', '778', '792', '793', '826'
);