
'use strict';
var ht = function() {}
ht.code = 'ht';
ht.data = {

GEN_Help_21               : 'How do I save/backup my wallet? ',

/* New Generics */
TX_CancelReplace           : 'Cancel or Replace Transaction',
TX_Cancel                  : 'Cancel Transaction',
PW_Desc              : 'This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**',
x_ReadMore                  : 'Read More',
TX_Replace                 : 'Replace Transaction',
x_TransHash                 : 'Transaction Hash',
TX_TXFee                     : 'TX Fee',
TX_Hash                    : 'TX Hash',

/* Check TX Status */
WALL_Create             : 'Check TX Status',
WALL_View_Short                  : 'TX Status',
TX_Details                  : 'Transaction Details',
VIEWTX_Desc                  : 'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
VIEWTX_NotFound                 : 'Transaction Not Found',
VIEWTX_NotFound_1               : 'This TX cannot be found in the TX Pool of the node you are connected to.',
VIEWTX_NotFound_2               : 'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
VIEWTX_NotFound_3               : 'It could still be in the TX Pool of a different node, waiting to be mined.',
VIEWTX_NotFound_4               : 'Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.',
VIEWTX_Found           : 'Pending Transaction Found',
VIEWTX_Found_1         : 'Your transaction was located in the TX Pool of the node you are connected to. ',
VIEWTX_Found_2         : 'It is currently pending (waiting to be mined). ',
VIEWTX_Found_3         : 'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
VIEWTX_FoundOnChain             : 'Transaction Found',
VIEWTX_FoundOnChain_1           : 'Your transaction was successfully mined and is on the blockchain.',
VIEWTX_FoundOnChain_2           : '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
VIEWTX_FoundOnChain_3           : '**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.',

/* Gen Wallet Updates */
GEN_Help_1                  : 'Use your',
GEN_Help_2                  : 'to access your account.',
GEN_Help_3                  : 'Your device * is * your wallet.',
GEN_Help_4                  : 'Guides & FAQ',
GEN_Help_5                  : 'How to Create a Wallet',
GEN_Help_6                  : 'Getting Started',
GEN_Help_7                  : 'Keep it safe · Make a backup · Don\'t share it with anyone · Don\'t lose it · It cannot be recovered if you lose it.',
GEN_Help_8                  : 'Not Downloading a File? ',
GEN_Help_9                  : 'Try using Google Chrome ',
GEN_Help_10                 : 'Right click & save file as. Filename: ',
GEN_Help_11                 : 'Don\'t open this file on your computer ',
GEN_Help_12                 : 'Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.) ',
GEN_Help_13                 : 'How to Back Up Your Keystore File ',
GEN_Help_14                 : 'What are these Different Formats? ',
GEN_Help_15                 : 'Preventing loss &amp; theft of your funds.',
GEN_Help_16                 : 'What are these Different Formats?',
GEN_Help_17                 : 'Why Should I?',
GEN_Help_18                 : 'To have a secondary backup.',
GEN_Help_19                 : 'In case you ever forget your password.',
GEN_Help_20                 : 'Cold Storage',
GEN_ConfButton              : 'I understand. Continue.',
GEN_Label_5                 : 'Save Your Private Key ',
GEN_Unlock                  : 'Unlock your Wallet to See Your Address',
x_GasPriceDesc              : 'Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.',
x_GasLimitDesc              : 'Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.',
x_NonceDesc                  : 'The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not more than once.',
TX_TXFeeDesc                  : 'The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)',



/* Navigation*/
WALL_Add               : 'Add Wallet ',
BULK_Generate            : 'Bulk Generate ',
x_Contact                 : 'Contact ',
CONTRACT_Title               : 'Contracts ',
CONTRACT_Deploy          : 'Deploy Contract ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Generate Wallet ',
x_Help                    : 'Help ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'My Wallets ',
x_Offline                 : 'Send Offline ',
TX_Send_Title             : 'Send Ether & Tokens ',
TX_Send_ShortTokens              : 'Send Tokens ',
MSG_Sign                 : 'Sign Message ',
SWAP_Title                    : 'Swap ',
WALL_View              : 'View Wallet Info ',
WALL_Your             : 'Your Wallets ',

/* General */
x_Access                    : 'Access ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. You may know this as your "Account #" or your "Public Key". It is what you send people so they can send you ether. That icon is an easy way to recognize your address. ',
ADDR_                   : 'Your Address ',
x_Cancel                    : 'Cancel ',
x_CSV                       : 'CSV file (unencrypted) ',
x_Download                  : 'Download ',
x_Json                      : 'JSON File (unencrypted) ',
x_JsonDesc                  : 'This is the unencrypted, JSON format of your private key. This means you do not need the password but anyone who finds your JSON can access your wallet & Ether without the password. ',
x_Keystore                  : 'Keystore File (UTC / JSON · Recommended · Encrypted) ',
x_Keystore2                 : 'Keystore File (UTC / JSON) ',
x_KeystoreDesc              : 'This Keystore file matches the format used by Mist so you can easily import it in the future. It is the recommended file to download and back up. ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : 'Password ',
x_Print                     : 'Print Paper Wallet ',
x_PrintDesc                 : 'ProTip: Click print and save this as a PDF, even if you do not own a printer! ',
x_PrintShort                : 'Print ',
x_PrivKey                   : 'Private Key (unencrypted) ',
x_PrivKey2                  : 'Private Key ',
x_PrivKeyDesc               : 'This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted versions are typically recommended. ',
x_Save                      : 'Save ',
x_TXT                       : 'TXT file (unencrypted) ',
WALL_                    : 'Wallet ',

/* Header */
CX_Tagline                  : 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension ',
WARN_04                : 'Make sure you have **external backups** of any wallets you store here. Many things could happen that would cause you to lose the data in this Chrome Extension, including uninstalling and reinstalling the extension. This extension is a way to easily access your wallets, **not** a way to back them up. ',
FOOTER_Tagline                 : 'Open Source JavaScript Client-Side Ether Wallet ',
WARN_01               : 'Always check the URL before accessing your wallet or creating a new wallet. Beware of phishing sites! ',

/* Footer */
FOOTER_1                    : 'Free, open-source, client-side tool for easily &amp; securely interacting with the Ethereum network. ',
FOOTER_1b                   : 'Created by ',
FOOTER_2                    : 'Donations greatly appreciated ',
FOOTER_3                    : 'Client-side wallet generation by ',
FOOTER_4                    : 'Disclaimer ',

/* Sidebar */
ACCOUNT_Info         : 'Account Information ',
ACCOUNT_Address         : 'Account Address ',
ACCOUNT_Balance          : 'Account Balance ',
TOKEN_Balance            : 'Token Balances ',
SIDEBAR_Equiv               : 'Equivalent Values ',
TX_History        : 'Transaction History ',
SIDEBAR_donation            : 'MyEtherWallet is a free, open-source service dedicated to your privacy and security. The more donations we receive, the more time we spend creating new features, listening to your feedback, and giving you what you want. We are just two people trying to change the world. Help us? ',
SIDEBAR_donate              : 'Donate ',
SIDEBAR_thanks              : 'THANK YOU!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'How would you like to access your wallet? ',
DECRYPT_Title               : 'Select the format of your private key ',
WALL_Select              : 'Select a Wallet ',

/* Mnemonic */
MNEM_1                      : 'Please select the address you would like to interact with. ',
MNEM_2                      : 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ',
MNEM_more                   : 'More Addresses ',
MNEM_prev                   : 'Previous Addresses ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_1                : 'Connect your Ledger Nano S ',
DECRYPT_Ledger_2                : 'Open the Ethereum application (or a contract application) ',
DECRYPT_Ledger_3                : 'Verify that Browser Support is enabled in Settings ',
DECRYPT_Ledger_4                : 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Re-open MyEtherWallet on a secure (SSL) connection ',
DECRYPT_Ledger_0b               : 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_scan             : 'Connect to Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Connect to TREZOR ',

/* Add Wallet */
DECRYPT_Label_1                 : 'What would you like to do? ',
WALL_GenerateNew                 : 'Generate New Wallet ',
DECRYPT_Radio_2                 : 'Select Your Wallet File (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Select Your Wallet File ',
DECRYPT_Radio_2_short           : 'SELECT WALLET FILE... ',
DECRYPT_Radio_3                 : 'Paste/Type Your Private Key ',
ACCOUNT_AddWatch                 : 'Add an Account to Watch ',
MNEM_Enter                 : 'Paste/Type Your Mnemonic ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Custom',
DECRYPT_Label_2                 : 'Create a Nickname ',
DECRYPT_Label_3                 : 'Your wallet is encrypted. Please enter the password. ',
DECRYPT_Label_4                 : 'Add an Account to Watch ',
WARN_03               : 'You can add any account to "watch" on the wallets tab without uploading a private key. This does ** not ** mean you have access to this wallet, nor can you transfer Ether from it. ',
DECRYPT_Label_5                 : 'Enter the Address ',
WALL_Unlock                 : 'Unlock your Wallet ',
WALL_Unlock_Short           : 'Unlock ',
ACCOUNT_Add                 : 'Add Account ',
PW_Optional                 : 'Password (optional): ',

/* My Wallet */
WALL_Nickname                  : 'Wallet Nickname ',
MYWAL_Address               : 'Wallet Address ',
ACCOUNT_Balance                   : 'Balance ',
WALL_Edit_Short                  : 'Edit ',
WALL_View_Short                  : 'View ',
WALL_Remove                : 'Remove ',
WALL_RemoveWal             : 'Remove Wallet ',
WALL_WatchOnlyAccounts             : 'Your Watch-Only Accounts ',
WALL_Viewing               : 'Viewing Wallet ',
WALL_Hide                  : 'Hide Wallet Info ',
WALL_Edit                : 'Edit Wallet ',
WALL_Name                  : 'Wallet Name ',
WARN_06             : 'Warning! You are about to remove your wallet ',
WARN_07             : 'Be sure you have **saved the private key and/or Keystore File and the password** before you remove it. ',
WARN_08             : 'If you want to use this wallet with your MyEtherWallet CX in the future, you will need to manually re-add it using the private key/JSON and password. ',

/* Generate Wallets */
GEN_desc                    : 'If you want to generate multiple wallets, you can do so here ',
PW_Enter                 : 'Enter a strong password (at least 9 characters) ',
PW_Enter           : 'Do NOT forget to save this! ',
GEN_SuccessMsg              : 'Success! Your wallet has been generated. ',
x_Keystore_Save                 : 'Save your Wallet File.   ',
ADDR_Save                 : 'Save Your Address. ',
GEN_Label_4                 : 'Print paper wallet or a QR code. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Number of Wallets To Generate ',
BULK_Label_2                : 'Generate Wallets ',
BULK_SuccessMsg             : 'Success! Your wallets have been generated. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'To Address ',
x_Amount                 : 'Amount to Send ',
x_Amount_short           : 'Amount ',
TOKEN_AddCustom                 : 'Add Custom Token ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : 'Send Entire Balance ',
TX_Generate               : 'Generate Transaction ',
TX_Unsigned                    : 'Raw Transaction ',
TX_Signed                 : 'Signed Transaction ',
TX_Send_Short                  : 'Send Transaction ',
SENDModal_Title             : 'Warning! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'You are about to send ',
SENDModal_Content_2         : 'to address ',
SENDModal_Content_3         : 'Are you sure you want to do this? ',
SENDModal_Content_4         : 'NOTE: If you encounter an error, you most likely need to add ether to your account to cover the gas cost of sending tokens. Gas is paid in ether. ',
SENDModal_No                : 'No, get me out of here! ',
SENDModal_Yes               : 'Yes, I am sure! Make transaction. ',

/* Tokens */
ADDR_Short                  : 'Address ',
TOKEN_Symbol                : 'Token Symbol ',
TOKEN_Dec                   : 'Decimals ',
TOKEN_show                  : 'Show All Tokens ',
TOKEN_hide                  : 'Hide Tokens ',

/* Send Transaction */
TX_desc                  : 'If you want to send Tokens, please use the "Send Token" page instead. ',
TX_warning               : 'If you are using the "Only ETH" or "Only ETC" Functions you are sending via a contract. Some services have issues accepting these transactions. Read more. ',
SEND_Advanced              : '+Advanced: Add Data ',
x_Data                  : 'Data ',
x_GasLimit                   : 'Gas Limit ',
TX_Send_ShortInfo              : 'A standard transaction using 21000 gas will cost 0.000441 ETH. We use a slightly-above-minimum gas price of 0.000000021 ETH to ensure it gets mined quickly. We do not take a transaction fee. ',

/* Offline Transaction */
OFFLINE_Title               : 'Generate & Send Offline Transaction ',
OFFLINE_Desc                : 'Generating offline transactions can be done in three steps. You will complete steps 1 and 3 on an online computer, and step 2 on an offline/airgapped computer. This ensures your private keys do not touch an internet-connected device. ',
OFFLLINE_Step1_Title        : 'Step 1: Generate Information (Online Computer) ',
OFFLINE_Step1_Button        : 'Generate Information ',
ADDR_From       : 'From Address ',
OFFLINE_Step1_Label_2       : 'Note: This is the FROM address, not the TO address. Nonce is generated from the originating account. If using an airgapped computer, it would be the address of the cold-storage account. ',
OFFLINE_Step2_Title         : 'Step 2: Generate Transaction (Offline Computer) ',
ADDR_To       : 'To Address ',
OFFLINE_Step2_Label_2       : 'Value / Amount to Send ',
x_GasPrice                  : 'Gas Price ',
x_GasPriceDesc                 : 'This was displayed in Step 1 on your online computer. ',
x_GasLimit       : 'Gas Limit ',
x_GasLimitDesc      : '21000 is the default gas limit. When you send contracts or add\'l data, this may need to be different. Any unused gas will be returned to you. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'This was displayed in Step 1 on your online computer. ',
x_Data       : 'Data ',
x_DataDesc      : 'This is optional. Data is often used when you send transactions to contracts. ',
OFFLINE_Step2_Label_7       : 'Enter / Select your Private Key / JSON. ',
OFFLINE_Step3_Title         : 'Step 3: Send / Publish Transaction (Online Computer) ',
OFFLINE_Step3_Label_1       : 'Paste the signed transaction from Step 2 here and press the "SEND TRANSACTION" button. ',

/* Contracts */
CONTRACT_Title              : 'Contract Address ',
CONTRACT_Title_2            : 'Select Existing Contract ',
CONTRACT_Json               : 'ABI / JSON Interface ',
CONTRACT_Interact_Title     : 'Read / Write Contract ',
CONTRACT_Interact_CTA       : 'Select a function ',
CONTRACT_Bytecode           : 'Bytecode',
CONTRACT_Read               : 'READ ',
CONTRACT_Write              : 'WRITE ',
CONTRACT_GenBytecode                : 'Generate Bytecode ',
CONTRACT_GenBytecoded               : 'Generated Bytecode ',
TX_Sign                  : 'Sign Transaction ',
CONTRACT_GenInterface               : 'Generated Interface ',

/* Node Switcher */
NODE_Title                  : 'Set Up Your Custom Node',
NODE_Subtitle               : 'To connect to a local node...',
WARN_05                : 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Node Name',
NODE_Port                   : 'Node Port',
NODE_CTA                    : 'Save & Use Custom Node',

/* Swap / Exchange */
SWAP_rates                  : "Current Rates ",
SWAP_init_1                 : "I want to swap my ",
SWAP_init_2                 : " for ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Let's do this! ", // or "Continue"
SWAP_information            : "Your Information ",
x_Amount               : "Amount to send ",
SWAP_rec_amt                : "Amount to receive ",
SWAP_your_rate              : "Your rate ",
SWAP_rec_add                : "Your Receiving Address ",
SWAP_start_CTA              : "Start Swap ",
SWAP_ref_num                : "Your reference number ",
SWAP_time                   : "Time remaining to send ",
SWAP_elapsed                : "Time elapsed since sent ",
SWAP_progress_1             : "Order Initiated ",
SWAP_progress_2             : "Waiting for your ", // Waiting for your BTC...
SWAP_progress_3             : "Received! ", // ETH Received!
SWAP_progress_4             : "Sending your {{orderResult.output.currency}} ",
SWAP_progress_5             : "Order Complete ",
SWAP_order_CTA              : "Please send ", // Please send 1 ETH...
SWAP_unlock                 : "Unlock your wallet to send ETH or Tokens directly from this page. ",

/* Sign Message */
MSG_message                 : 'Message ',
MSG_date                    : 'Date ',
MSG_signature               : 'Signature ',
MSG_verify                  : 'Verify Message ',
MSG_info1                   : 'Include the current date so the signature cannot be reused on a different date. ',
MSG_info2                   : 'Include your nickname and where you use the nickname so someone else cannot use it. ',
MSG_info3                   : 'Include a specific reason for the message so it cannot be reused for a different purpose. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'This allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to [import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). If you want to check your balance, we recommend using a blockchain explorer like [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'This allows you to download different versions of private keys and re-print your paper wallet. ',
VIEWWALLET_SuccessMsg       : 'Success! Here are your wallet details. ',
VIEWWALLET_ShowPrivKey      : '(show)',
VIEWWALLET_HidePrivKey      : '(hide)',

/* Chrome Extension */
ERROR_CX_01                  : 'You don\'t have any wallets saved. Click ["Add Wallet"](/cx-wallet.html#add-wallet) to add one! ',
CX_quicksend                : 'QuickSend ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : 'Please enter a valid amount.', // 0
ERROR_1                     : 'Your password must be at least 9 characters. Please ensure it is a strong password. ', // 1
ERROR_2                     : 'Sorry! We don\'t recognize this type of wallet file. ', // 2
ERROR_3                     : 'This is not a valid wallet file. ', // 3
ERROR_4                     : 'This unit doesn\'t exists, please use the one of the following units ', // 4
ERROR_5                     : 'Please enter a valid address. ', // 5
ERROR_6                     : 'Please enter a valid password. ', // 6
ERROR_7                     : 'Please enter valid decimals     (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Please enter a valid gas limit  (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Please enter a valid data value (Must be hex.) ', // 9
ERROR_10                    : 'Please enter a valid gas price. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Please enter a valid nonce      (Must be integer.) ', // 11
ERROR_12                    : 'Invalid signed transaction. ', // 12
ERROR_13                    : 'A wallet with this nickname already exists. ', // 13
ERROR_14                    : 'Wallet not found. ', // 14
ERROR_15                    : 'Whoops. It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal. ', // 15 - NOT USED
ERROR_16                    : 'A wallet with this address already exists in storage. Please check your wallets page. ', // 16
ERROR_17                    : 'Account you are sending from does not have enough funds. If sending tokens, you must have 0.01 ETH in your account to cover the cost of gas. ', // 17
ERROR_18                    : 'All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
ERROR_19                    : 'Please enter a valid symbol', // 19
ERROR_20                    : 'Not a valid ERC-20 token', // 20
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Max amount: ', // 27
ERROR_28                    : 'You need this `Keystore File + Password` or the `Private Key` (next page) to access this wallet in the future. ', // 28
ERROR_29                    : 'Please enter a valid user and password. ', // 29
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank"  rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Valid address ',
SUCCESS_2                   : 'Wallet successfully decrypted ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:  ',
SUCCESS_4                   : 'Your wallet was successfully added ',
SUCCESS_5                   : 'File Selected ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_02              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Invalid sender ',
GETH_Nonce                  : 'Nonce too low ',
GETH_Cheap                  : 'Gas price too low for acceptance ',
GETH_Balance                : 'Insufficient balance ',
GETH_NonExistentAccount     : 'Account does not exist or account balance too low ',
GETH_InsufficientFunds      : 'Insufficient funds for gas * price + value ',
GETH_IntrinsicGas           : 'Intrinsic gas too low ',
GETH_GasLimit               : 'Exceeds block gas limit ',
GETH_NegativeValue          : 'Negative value ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Transaction with the same hash was already imported.",
PARITY_Old                  : "Transaction nonce is too low. Try incrementing the nonce.",
PARITY_TooCheapToReplace    : "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce.",
PARITY_LimitReached         : "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee.",
PARITY_InsufficientGasPrice : "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee.",
PARITY_InsufficientBalance  : "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} wei and got: {} wei.",
PARITY_GasLimitExceeded     : "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas.",
PARITY_InvalidGasLimit      : "Supplied gas is beyond limit.",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : ' ',
z_TRANSLATE1            : ' ',
z_TRANSLATE2            : ' ',
z_TRANSLATE3            : ' ',
z_TRANSLATE4            : ' ',
z_TRANSLATE5            : ' '

};

module.exports = ht;