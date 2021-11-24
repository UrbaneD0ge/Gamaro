export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const req = window.indexedDB.open("gamaro", 1);
    let db, tx, store;

    req.onupgradeneeded = function (e) {
      const db = req.result;
      db.createObjectStore("products", { keyPath: "_id" });
      db.createObjectStore("categories", { keyPath: "_id" });
      db.createObjectStore("cart", { keyPath: "_id" });
    };

    req.onerror = function (e) {
      console.error("Error Try again");
    };

    req.onsuccess = function (e) {
      db = req.result;
      tx = db.transaction(storeName, "readwrite");
      store = tx.objectStore(storeName);

      db.onerror = function (e) {
        console.error("Error", e);
      };
      switch (method) {
        case "put":
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("No valid method");
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
