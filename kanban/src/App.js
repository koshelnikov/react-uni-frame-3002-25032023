import './App.css';
import {useState} from "react";
import {Layout} from "./components/layout/layout";
import {CardDialog} from "./components/card-dialog/card-dialog";
import {Column} from "./components/column/column";

function App() {

  const [columns] = useState([
    {id: 'TODO', name: 'TODO'},
    {id: 'IN_PROGRESS', name: 'In Progress'},
    {id: 'REVIEW', name: 'Review'},
    {id: 'MERGED', name: 'Merged'},
  ]);
  const [cards, setCards] = useState([]);

  const [isCardDialogShown, setIsCardDialogShown] = useState(false);
  const [editedCardId, setEditedCardId] = useState(undefined);
  const [columnId, setColumnId] = useState(undefined);

  const removeCardById = (id) => {
    const cardIndex = cards.findIndex((card) => card.id === id);
    cards.splice(cardIndex, 1);
    setCards([...cards])
  }

  const getCardById = (id) =>
      cards.find((card) => card.id === id);

  const getNextTaskId = () => {
      const values = [].concat(...cards.map((card) => card.id))
      return 1 + (values.length === 0
          ? 0
          : values.reduce((val, cur) => Math.max(val, cur)))
  }

  const getCardsByColumnId = (columnId) =>
      cards.filter((card) => card.columnId === columnId);

  return (
    <div className="app">
      <Layout>
          {
              columns.map((column) => {
                  return <Column
                      key={column.id}
                      name={column.name}
                      cards={getCardsByColumnId(column.id)}
                      onCardAdded={() => {
                          setColumnId(column.id);
                          setIsCardDialogShown(true);
                      }}
                      onCardRemoved={removeCardById}
                      onCardMoved={(id) => {
                        const card = getCardById(id);
                        card.columnId = column.id;
                        setCards([...cards])
                      }}
                      onCardEdited={(id) => setEditedCardId(id)}
                  />
              })
          }

      </Layout>

      {isCardDialogShown &&
      <CardDialog
          card={getCardById(editedCardId)}
          onSave={(name) => {
            if (editedCardId) {
              const card = getCardById(editedCardId);
              card.name = name;
            } else {
              const card = {
                id: getNextTaskId(),
                name: name,
                columnId: columnId
              };
            }
            setCards([...cards]);
            setIsCardDialogShown(false);
            setEditedCardId(undefined)
          }}
          onClose={() => {
              setIsCardDialogShown(false)
              setEditedCardId(undefined)
          }}
      />
      }
    </div>
  );
}

export default App;
