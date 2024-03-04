import logo from "@/assets/logo.png";
import { Scroll, Timer } from "@phosphor-icons/react";
import { Tooltip } from "react-tooltip";
import * as S from "./styles";

export function Navbar() {
  return (
    <S.Container>
      <S.Nav>
        <div>
          <img src={logo} alt="Logo da página" />
        </div>

        <S.Menu>
          <Tooltip className="tooltip" id="timer-link" place="top" />
          <S.Link
            href="/"
            data-tooltip-id="timer-link"
            data-tooltip-content={"Timer"}
          >
            <Timer size={22} color="#E1E1E6" />
          </S.Link>

          <Tooltip className="tooltip" id="historic-link" place="top" />
          <S.Link
            href="/"
            data-tooltip-id="historic-link"
            data-tooltip-content={"Histórico"}
          >
            <Scroll size={22} color="#E1E1E6" />
          </S.Link>
        </S.Menu>
      </S.Nav>
    </S.Container>
  );
}
