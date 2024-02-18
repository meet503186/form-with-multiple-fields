import { getErrorKey, getErrorText } from "@/components/CustomField/constants";
import { ICustomFieldItem } from "@/interface/customField.interface";

export const validateFields = ({
  _state,
  fields,
}: {
  _state: any;
  fields: ICustomFieldItem[];
}) => {
  let isValid = true;
  fields.forEach(({ isOptional, regex, _key }) => {
    if (isOptional) {
      return;
    }

    if (Array.isArray(_state[_key])) {
      _state[getErrorKey(_key)] = false;
      _state[getErrorText(_key)] = "";
      return;
    }

    if (_state[_key] === undefined) {
      isValid = false;
      _state[getErrorKey(_key)] = true;
      _state[getErrorText(_key)] = "This field can't be empty";
      return;
    }

    if (_state[_key] < 0) {
      isValid = false;
      _state[getErrorKey(_key)] = true;
      _state[getErrorText(_key)] = "Please enter a valid value";
      return;
    }

    if (!((_state[_key] ?? "") + "")?.trim()?.length) {
      isValid = false;
      _state[getErrorKey(_key)] = true;
      _state[getErrorText(_key)] = "Please enter a valid value";
      return;
    }
    if (regex && !regex.test(_state[_key])) {
      isValid = false;
      _state[getErrorKey(_key)] = true;
      _state[getErrorText(_key)] = "Please enter a valid value";
      return;
    }

    _state[getErrorKey(_key)] = false;
    _state[getErrorText(_key)] = "";
    // _state[_key] = ((_state[_key] ?? "") + "")?.trim();
  });
  return { isValid, _state };
};