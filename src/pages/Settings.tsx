import { useContext } from "react";
import { Input } from "../components/primitives/Input";
import { Page } from "../components/primitives/Page";
import { FdcApiContext } from "../contexts/fdcApiKey";
import { useFood } from "../data/fdc/food";
import styled from "styled-components";

export const ApiStatus = styled.span`
  margin-left: 4px;
  &[data-status="loading"] {
    color: blue;
  }
  &[data-status="valid"] {
    color: green;
  }
  &[data-status="invalid"] {
    color: red;
  }
`;

export const Settings: React.FC = (props) => {
  const { key, setKey } = useContext(FdcApiContext);
  const { food, apiError, error, isLoading } = useFood(747447);
  const isValid = Boolean(food);
  const isInvalid = Boolean(apiError || error);
  return (
    <Page {...props}>
      <h2>Settings</h2>
      <p>You can change some settings here :)</p>

      <h3>
        <label htmlFor="apiKey">API Key</label>
      </h3>
      <p>
        This app comes with a default API key. If that one ever gets invalidated
        or starts hitting the rate-limit too often, you can request your own
        from the FDA website and paste it below.
      </p>
      <Input
        id="apiKey"
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <ApiStatus
        data-status={
          (isLoading && "loading") ||
          (isValid && "valid") ||
          (isInvalid && "invalid")
        }
      >
        {isLoading && "loading..."}
        {food && "✔️ valid"}
        {isInvalid && "❌ invalid"}
      </ApiStatus>
    </Page>
  );
};
