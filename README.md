## Hooks
自從有了 hooks ，程式碼可讀性更高，更有彈性，更易上手

### hooks 簡單介紹
捨棄了以往的 class，hook 只能在 function component 內使用，且一般會以 *use*開頭來識別，基礎的 hook 有兩種：*useState*、*useEffect*

### hooks的好處
- hoc, render props太難寫了且會改變元件階層關係,透過 hooks 將可以將固定的邏輯從元件中抽離出來，以進行獨立的測試和使用，同時不用改變原本元件間的階層關係。
- react class方法會需要定義生命週期有的內容,hooks只需要去依賴的props,state來做出想要的結果，不必擔心生命週期。
- …

### hooks的特性與規則
- 只能在最高層呼叫 ，不能在條件式（conditions）、迴圈（loops）等地方呼叫hooks。
	- 因為 React 會依賴這些 hooks 呼叫到的順序，當我們將其放到條件式或迴圈時，就會破壞了這些順序，如此會造成錯誤。因此如果有需要用到條件判斷，只需要把判斷式放在 hook 內就可以了。
- 只能在 React 的 function components 中呼叫 Hook，不能使用一般js or class component裡使用

### hooks的缺點
- useEffect 把三個元件狀態合在一起，寫法太過簡單所以使用時要注意，如果沒有加上限制就容易造成不停的觸發