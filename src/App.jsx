import { CrossIcon, MoonIcon } from "./components/icons";
//import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl 
        font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button><MoonIcon className="fill-red-400"/></button>
        </div>
      </header>
        
        
      <main className="container mx-auto px-4 mt-8">

        <form className="flex gap-4 overflow-hidden rounded-md bg-white 
        py-4 px-4 items-center mt-8">
          <span className="inline-block h-5 w-5 rounded-full
          border-2"></span>
          <input
            type="text"
            placeholder="Create a new todo..." 
            className="w-full text-gray-400 outline-none"/>
        </form>
        
        {/* TodoList (TodoItem) TodoUpdate y TodoDelete */}
        <div className="rounded-md bg-white">  
          <article className="flex gap-4 py-4 px-4 border-b-gray-400 border-b">
          <button className="inline-block h-5 w-5 flex-none rounded-full
          border-2"></button>
            <p className="text-gray-600 grow">
              Completar app de lista de tareas</p>
            <button className="ml-auto">
              <CrossIcon />
          </button>
          </article>
          
          <article className="flex gap-4 py-4 px-4 border-b-gray-400 border-b">
          <button className="inline-block h-5 w-5 flex-none rounded-full
          border-2"></button>
            <p className="text-gray-600 grow">
              Recorrer el campo de Oliver y Benji  
            </p>
            <button>
              <CrossIcon />
          </button>
          </article>
          
          <article className="flex gap-4 py-4 px-4 border-b-gray-400 border-b">
          <button className="inline-block h-5 w-5 flex-none rounded-full
          border-2"></button>
            <p className="text-gray-600 grow">
              Reunir las seis gemas del infinito</p>
            <button>
              <CrossIcon />
          </button>
        </article>
       
        </div>
        
      {/* TodoComputed */}
      <section className="flex justify-between py-4 px-4">
      <span className="text-gray-400">5 items left</span>
      <button className="text-gray-400">Clear Completed</button>
      </section>
      
      {/* TodoFilter */}
      <section className="container mx-auto mt-8 px-4 ">
        <div className="bg-white rounded-md justify-center flex gap-4">
        <button className="text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      </main>

      <footer className="text-center mt-8">Drag and drop to reorder list</footer>
      
    </div>
  );
};

export default App;