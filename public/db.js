let db;
let budgetVersion;

const request = indexDB.open('BudgetDB',budgetVersion || 21);

request.onupgradeneeded = function (e) {
    console.log('Upgrade needed in IndexDB');
  
    const { oldVersion } = e;
    const newVersion = e.newVersion || db.version;
  
    console.log(`DB Updated from version ${oldVersion} to ${newVersion}`);
  
    db = e.target.result;
  
    if (db.objectStoreNames.length === 0) {
      db.createObjectStore('BudgetStore', { autoIncrement: true });
    }
  };

  request.onerror = function (e) {
    console.log(`Woops! ${e.target.errorCode}`);
  };
