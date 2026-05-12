#Playwright UI & API Automation Framework

Project Description:

This project is a Playwright automation framework built with TypeScript and Page Object Model (POM).  
The framework handles both UI and API test scenarios for SauceDemo and Simple Books API.



Technologies Used should be downloaded :

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Git & GitHub



Prerequisites:

Before running the framework, ensure the following are installed:

- Node.js v18+
- npm v9+
- Visual Studio Code

---

*Setup & Installation:

Using CMD OR Powershell:
 
1. Clone Repository


git clone https://github.com/saifeddin770-sys/Playwright_swagLabsUI-SimpleBooksAPI_framework.git

2. Navigate to Project

cd playwright-ui-api-automation-framework



3. Install Dependencies

Using CMD OR Powershell:
npm install


4. Install Playwright Browsers


npx playwright install



*Tests Execution :

-Run All Tests :

Using CMD OR Powershell:
npx playwright test




-Run UI Tests Only :

Using CMD OR Powershell:
npx playwright test tests/ui


*Run API Tests Only

Using CMD OR Powershell:
npx playwright test tests/api




Run Tests in Headed Mode :

npx playwright test --headed




*Run Tests in Chrome Only

Using CMD OR Powershell:
npx playwright test --project=chromium



*Run Tests in Firefox Only


Using CMD OR Powershell:
npx playwright test --project=firefox



*Framework Architecture


playwright-ui-api-automation-framework/
│
├── src/
│   ├── api/
│   ├── pages/
│   ├── utils/
│   └── test-data/
│
├── tests/
│   ├── api/
│   └── ui/
│
├── reports/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

# Test Scenarios

## UI Test Cases

| TC ID | Test Name |
|------|------|
| TC_UI_001 | Valid Login |
| TC_UI_002 | Invalid Login Validation |
| TC_UI_003 | Checkout End-to-End Flow |

---

## API Test Cases

| TC ID | Test Name |
|------|------|
| TC_API_001 | Create New Book Order |
| TC_API_002 | Fetch Created Order |



# Reports

After test execution, Playwright automatically generates an HTML report.

*Open Report

Using CMD OR Powershell:
npx playwright show-report



*Features Implemented

- Page Object Model (POM)
- Data-driven testing using JSON
- Dynamic random data generation
- Cross-browser execution
- HTML reporting
- API testing using Playwright request context
- Global setup logging


# Author
saifeddin770-sys
