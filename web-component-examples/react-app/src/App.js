import { useEffect, useRef } from "react";
import "./App.css";
import { playerConfig } from "./data";

import $ from "jquery";
import "@tekdi/sunbird-quml-player-web-component/styles.css";
import "@tekdi/sunbird-quml-player-web-component/sunbird-quml-player.js";


function App() {
  const sunbirdQumlPlayerRef = useRef(null);

  // Assign jQuery and questionListUrl to window object
  window.jQuery = $;
  window.questionListUrl = "https://dev-middleware.prathamdigital.org/api/question/v2/list";

  useEffect(() => {
    const playerElement = sunbirdQumlPlayerRef.current;
    const handlePlayerEvent = (event) => {
      console.log("Player Event", event.detail);
    };
    const handleTelemetryEvent = (event) => {
      console.log("Telemetry Event", event.detail);
    };

    playerElement.addEventListener("playerEvent", handlePlayerEvent);
    playerElement.addEventListener("telemetryEvent", handleTelemetryEvent);

    return () => {
      playerElement.removeEventListener("playerEvent", handlePlayerEvent);
      playerElement.removeEventListener("telemetryEvent", handleTelemetryEvent);
    };
  }, []);

  return (
    <div className="App">
      <sunbird-quml-player
        player-config={JSON.stringify(playerConfig)}
        ref={sunbirdQumlPlayerRef}
      ></sunbird-quml-player>
    </div>
  );
}

export default App;
