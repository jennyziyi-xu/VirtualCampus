// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div class="frame">
      <div class="corner_topleft"></div>
      <div class="corner_topright"></div>
      <div class="corner_bottomleft"></div>
      <div class="corner_bottomright"></div>

      <div class="camera">
            <div class="map pixel-art">
              <div class="character" facing="down" walking="true">
                  <div class="shadow pixel-art"></div>
                  <div class="character_spritesheet pixel-art"></div>
                  </div>
            </div>
      </div>
      <div class="dpad">
         <div class="DemoDirectionUI flex-center">
               <button class="dpad-button dpad-left">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 13 13" shape-rendering="crispEdges">
                       <path class="Arrow_outline-top"  stroke="#5f5f5f" d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1" />
                       <path class="Arrow_surface" stroke="#f5f5f5" d="M1 1h11M1 2h11M1 3h5M7 3h5M1 4h4M7 4h5M1 5h3M7 5h5M1 6h4M7 6h5M1 7h5M7 7h5M1 8h11" />
                       <path class="Arrow_arrow-inset"  stroke="#434343" d="M6 3h1M5 4h1M4 5h1" />
                       <path class="Arrow_arrow-body" stroke="#5f5f5f" d="M6 4h1M5 5h2M5 6h2M6 7h1" />
                       <path class="Arrow_outline-bottom" stroke="#434343" d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11" />
                       <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                       <path class="Arrow_front" stroke="#cccccc" d="M1 10h11M1 11h11" />
                   </svg>
               </button>
               <button class="dpad-button dpad-up">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 13 13" shape-rendering="crispEdges">
                       <path class="Arrow_outline-top"  stroke="#5f5f5f" d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1" />
                       <path class="Arrow_surface" stroke="#f5f5f5" d="M1 1h11M1 2h11M1 3h11M1 4h5M7 4h5M1 5h4M8 5h4M1 6h3M9 6h3M1 7h11M1 8h11" />
                       <path class="Arrow_arrow-inset"  stroke="#434343" d="M6 4h1M5 5h1M7 5h1" />
                       <path class="Arrow_arrow-body" stroke="#5f5f5f" d="M6 5h1M4 6h5" />
                       <path class="Arrow_outline-bottom" stroke="#434343" d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11" />
                       <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                       <path class="Arrow_front" stroke="#cccccc" d="M1 10h11M1 11h11" />
                   </svg>
               </button>
               <button class="dpad-button dpad-down">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 13 13" shape-rendering="crispEdges">
                       <path class="Arrow_outline-top" stroke="#5f5f5f" d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1" />
                       <path class="Arrow_surface" stroke="#f5f5f5" d="M1 1h11M1 2h11M1 3h11M1 4h3M9 4h3M1 5h4M8 5h4M1 6h5M7 6h5M1 7h11M1 8h11" />
                       <path class="Arrow_arrow-inset" stroke="#434343" d="M4 4h5" />
                       <path class="Arrow_arrow-body" stroke="#5f5f5f" d="M5 5h3M6 6h1" />
                       <path class="Arrow_outline-bottom" stroke="#434343" d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11" />
                       <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                       <path class="Arrow_front" stroke="#cccccc" d="M1 10h11M1 11h11" />
                   </svg>
               </button>
               <button class="dpad-button dpad-right">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 13 13" shape-rendering="crispEdges">
                       <path class="Arrow_outline-top"  stroke="#5f5f5f" d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1" />
                       <path class="Arrow_surface" stroke="#f5f5f5" d="M1 1h11M1 2h11M1 3h5M7 3h5M1 4h5M8 4h4M1 5h5M9 5h3M1 6h5M8 6h4M1 7h5M7 7h5M1 8h11" />
                       <path class="Arrow_arrow-inset"  stroke="#434343" d="M6 3h1M7 4h1M8 5h1" />
                       <path class="Arrow_arrow-body" stroke="#5f5f5f" d="M6 4h1M6 5h2M6 6h2M6 7h1" />
                       <path class="Arrow_outline-bottom" stroke="#434343" d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11" />
                       <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                       <path class="Arrow_front" stroke="#cccccc" d="M1 10h11M1 11h11" />
                   </svg>
               </button>
           </div>
      </div>
    </div>



  );
}





export default App;
