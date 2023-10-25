import promptlayer from "@/promptlayer";
import * as prompts from "@/prompts";
import * as utils from "@/utils";

export default {
  OpenAI: promptlayer.OpenAI,
  Anthropic: promptlayer.Anthropic,
  api_key: promptlayer.api_key,
  utils,
  prompts,
};
