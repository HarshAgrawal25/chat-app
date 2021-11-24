import React from "react";
import { UserInputSection } from "./UserInputElements";
import { AboutDiv } from "./UserInputElements";
import { IconDiv } from "./UserInputElements";
import { SpanText } from "./UserInputElements";
import { InputDiv } from "./UserInputElements";
import { TextAreaDiv } from "./UserInputElements";
import { ButtonDiv } from "./UserInputElements";
import { TextDiv } from "./UserInputElements";
import { HeadingText } from "./UserInputElements";


const UserInput = () => {

  
  return (
    <UserInputSection>
      <AboutDiv>
        <IconDiv>
          <i class="fas fa-code"></i>
        </IconDiv>
        <TextDiv>
          <HeadingText>Interpret Code</HeadingText>
          <SpanText>Write details about your code below.</SpanText>
        </TextDiv>
      </AboutDiv>

      {/* *************************************************************************************** */}
      {/* *************************************************************************************** */}

      <InputDiv>
        <label htmlFor="language">Language</label>
        <div>
          <span>0/40 chars</span>
        </div>

        <input type="text" id="language" placeholder="JavaScript" />
        <span>
          Which language are you using, will enable markup highlights
        </span>
      </InputDiv>

      {/* ******************************************************************************************** */}
      {/* ******************************************************************************************** */}

      <TextAreaDiv>
        <label htmlFor="code">Code</label>
        <div>
          <span>0/2000 chars</span>
        </div>
        <textarea
          type="text"
          name="language"
          placeholder="function Name(attr) {.."
          rows="3"
        />
        <span className="text-area-span">
          Place some code above to understand how it works
        </span>
      </TextAreaDiv>

      {/* ********************************************************************************************* */}
      {/* ********************************************************************************************* */}

      <ButtonDiv>
        <button className="open-brain-btn">Enhance with Ai</button>
      </ButtonDiv>
    </UserInputSection>
  );
};

export default UserInput;
