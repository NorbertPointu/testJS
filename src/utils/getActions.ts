const PREFIX_ACTION = "--";

/**
 * Convert a list of actions "action=value" to an object with action as key and p
 * @returns object of actions
 */
export const getActions = (actions: string[]) =>
  actions.reduce<{ [action: string]: string }>((acc, currentAction) => {
    if (!currentAction.startsWith(PREFIX_ACTION)) {
      return acc;
    }

    const [actionWithPrefix, value = ""] = currentAction.split("=");
    const action = actionWithPrefix.substring(PREFIX_ACTION.length);

    return { ...acc, [action]: value };
  }, {});
