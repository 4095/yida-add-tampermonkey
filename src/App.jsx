import {unsafeWindow} from "$";
import YidaTools from "./Components/YidaTools/index.jsx";

const App = () => {
    let count = 0;
    const interval = setInterval(() => {
        if (unsafeWindow.LeGao && unsafeWindow.AliLowCodeEngine && unsafeWindow.__VcDeepYidaUtils__) {
            count++;
            YidaTools();
        }
        if (count) {
            //停止
            clearInterval(interval);
        }
    }, 1e2)
}

export default App;
