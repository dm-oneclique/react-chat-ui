{ pkgs, lib, config, ... }:
{
  languages = {
    javascript = {
      enable = true;
      npm = {
        enable = true;
        install.enable = true;
      };
      corepack.enable = true;
    };

    typescript.enable = true;
  };

  packages = with pkgs; [ git ];

  # processes = {
  #   "storybook" = { exec = "storybook dev -p 6006"; env.STORYBOOK = "true"; };
  #   "build-storybook" = { exec = "storybook build"; env.STORYBOOK = "true"; };
  # };
  git-hooks.hooks.eslint.enable = true;
}

