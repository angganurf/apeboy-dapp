use anchor_lang::prelude::*;

declare_id!("4FDDmdCN562ehMwnVLBnEDAZpH8dBKghycL7Hf3uEvqN");

#[program]
pub mod apeboy {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
