# Fetch companies stock data

## Overview
This project aims to fetch stock prices for a list of companies from an Excel file, convert the prices to EUR, and save the results back to an Excel file. 

<a href="https://github.com/shetdisha94/CompanyStockInfo/blob/project-analysis/FlowChart.md" target="_blank">Link to process flow</a>

<a href="https://github.com/shetdisha94/CompanyStockInfo/blob/project-analysis/FlowChart.md" target="_blank">Link to results</a>


### Architectural choices

* Configuration data like URL, currency type, log level, are pulled form the configurattion file for keeping things flexible & ready for enhancements.
* Company names for which the stock information is needed is provided in input excel file to make it easy to add companies.
* As conversion rates don't change drastically, and to keep things efficient, avoided fetching the conversion rate too often.
* Fetch the entire company table listed in moneycontrol along with Url's and stored in dictionary in order to avoid frequent navigations to main page.
* Reusable and modular codes are created and wherever necessary injected javascript activity for more control
* Followed the naming convensions like strVariableName, dtVariableName, dictVariableName , in_ArguementName, out_ArguementName, io_ArguementName etc and defined  their scopes as relevant.
* Added annotations and named the actvities to identify errors and for easy walkthrow of code understanding
* Implement error handling at each workflow and nested workflows by rethrowing the exceptions
* Implement parallel activity to run few actions which are independent to each other


### Assumptions

* User is already logged in MoneyControl.

### Folder structure

```
Root Folder/
│
├── Config/                       
├── Data/
│   ├── Input/
│   ├── Output/
│   └── Logs/
├── Shared/
│   └── Components/
│       └── GetCompanyUrl.xaml
│       └── GetExchangeRate.xaml
├── Workflows/
│   ├── ExtractData/
│       └── FetchStockPrices.xaml
│   ├── ProcessData/
│       └── WriteToExcel.xaml  
└── Testing/
├── Main.xaml
```
### Requirements completed 

* Fetching the stock data for any number of companies
* Data validations & Converting the stock prices from INR to EUR
* Writing to Excel with required format
* Error handling & Loging for crucial scenarios


### Additional features

* To handle large data sets, considered running multiple bots with batch processing and using a queue to write batch data to Excel. [Started, not completed]
* Excel report to be emailed to end users [Not started]
* Background proces to write log for end users instead of sequential logging [Started, not completed]
* Add test cases for critical functionalities of the process [Not started]
* When ads are encountered, they should be closed, and the specific action should be retried after closing the ads. Can be handled in the catch block with a retry mechanism. [Not started]
* For larger datasets, periodically retriev the exchange rate can help mitigate any potential errors. [Not started]
* Utilize the REST API's provided by XE.com to obtain conversion rates which ensures reliability and accurecy [Not started]
