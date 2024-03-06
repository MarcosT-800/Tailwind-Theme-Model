
function App() {
  return (
    <div className="App">
      <main className='bg-light'>
        <div class="container mx-auto py-8">
          <h1 class="text-3xl font-bold text-primary">Meu Site com Tailwind CSS</h1>
          <p class="text-lg text-dark mt-4">Este é um parágrafo de exemplo.</p>
          <div class="border-2 border-primary p-4 mt-4">
            <p class="text-sm text-danger font-bold">Este é um aviso importante!</p>
            <p class="text-sm text-warning">Por favor, leia com atenção.</p>
          </div>
          <button class="bg-success hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">Botão de Sucesso</button>
          <div class="mt-8">
            <div class="mb-4">
              <p class="font-bold">Exemplo de Espaçamento:</p>
              <div class="bg-primary w-64 h-32 mt-2"></div>
            </div>
            <div class="mb-4">
              <p class="font-bold">Exemplo de Fonte:</p>
              <p class="font-mono text-lg text-primary mt-2">Fonte Monoespaçada</p>
            </div>
            <div class="mb-4">
              <p class="font-bold">Exemplo de Largura de Borda:</p>
              <div class="border border-success w-64 h-32 mt-2"></div>
            </div>
            <div class="mb-4">
              <p class="font-bold">Exemplo de Z-Index:</p>
              <div class="bg-primary w-64 h-32 mt-2 relative">
                <div class="absolute inset-0 bg-danger z-20"></div>
                <div class="absolute inset-5 bg-info z-30"></div>
                <div class="absolute inset-10 bg-warning z-40"></div>
              </div>

            </div>
            <div class="mb-4">
              <p class="font-bold">Exemplo de Altura:</p>
              <div class="bg-primary w-64 h-24 mt-2"></div>
            </div>
            <div class="mb-4">
              <p class="font-bold">Exemplo de Largura:</p>
              <div class="bg-primary w-24 h-24 mt-2"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
