const PREFIX_ACTION = "--";

/**
 * Convert a list of actions "action=value" to an object with action as key and p
 * @returns object of actions
 */
export const getActions = (actions: string[]) => {
  return actions.reduce((acc, currentAction) => {
    if (!currentAction.startsWith(PREFIX_ACTION)) {
      return acc;
    }

    const [action, value] = currentAction.split("=");

    return { acc, [action]: value };
  }, {});
};
