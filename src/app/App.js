import "./App.css";
import FloorSelect from "../features/BookForm/FloorSelect";
import TowerSelect from "../features/BookForm/TowerSelect";
import RoomSelect from "../features/BookForm/MeetRoomSelect";
import DataSelect from "../features/BookForm/DataSelect";
import CommentInput from "../features/BookForm/CommentInput";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <div className="flex">
                        <TowerSelect />
                        <FloorSelect />
                        <RoomSelect />
                        <DataSelect />
                    </div>
                    <div className="flex">
                        <CommentInput />
                    </div>
                    <div className="flex">
                        <button type="submit">Отправить</button>
                        <button type="reset">Очистить</button>
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
