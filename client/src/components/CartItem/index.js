import React from "react";
import { useStoreContext } from "../../utils/globalState.js";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
