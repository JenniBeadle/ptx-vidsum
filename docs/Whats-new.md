---
title: What's new - Paratext 9.3
sidebar_position: 3
---
:::caution
Please be aware that this is a Beta and some things may/will change before Paratext 9.3 is released.
::: 
### Paratext Live
Paratext Live uses a couple of servers.

- Paratext 8, 9.0 and 9.1 use a server called Internet (secondary) WCF and Paratext 9.2 uses Internet (primary) AMQP.  
   *This is why you can't use Paratext Live with 9.2 and 9.1 at the same time*

- In Paratext 9.3 when you start Paratext live you choose what server you want to use.
  - **Internet (primary)**, which is 9.2 and 9.3.
  - **Internet (secondary)** which is 9.0, 9.1 or Paratext 8.  

:::note
Everyone in a particular live session still needs to use the same server, it is just that from 9.3 you can work with someone on 9.1 or someone else on 9.2 (just not at the same time)
:::

### Study Bible Additions
The most obvious new feature the ability to **compare versions**.

- Open a Study Bible Additions project
- From the **Project** menu, 
- Under **Project**, choose **Compare Versions**  
  *The changes in the additions are displayed*.

### Scripture reference in navigation bar
In Paratext 9.3 you can copy and paste a scripture reference into the navigation bar.
- Copy the text of a reference (from another file)
- Click in the **book name** in the navigation bar
- Paste using **Ctrl+V**  
   ![](./media/paste-reference-2.png)

The reference should be in a format that matches the interface language.

For example, 
- in English: MAT 12.3, Mrk 5:4, Galatians 1:12
- in Spanish: Romanos 8:28

:::note
The names must matches the names as they are seen in the titles.  
Currently can't copy from Paratext, but that feature is being added to a later update.
:::

### Parallel Passages Tool
- The colours have changed from **green** to **grey**
- You can reduce or expand the Greek / Hebrew by clicking the little arrow.  
   ![](./media/parallel-passage-greek-collapse.png)
### Open text collection
There is a new menu item on the **main menu** 
  ![](./media/open-text-collection-menu-item-2.png)
- From the **Paratext menu**
- Choose **Open text collection**  
  *This window looks like what was used in earlier versions of Paratext*.
- Open a previously **saved text collection** from the bottom left
- You can still open a text collection from the **Open** window as well.

### Arranging windows
- Arrange windows by **rows** as well as by **columns**.
   ![](./media/arrange-in-rows.png)
:::tip
Remember to save your layout!
:::
### Floating Windows
- Dropdown to change the active project  
   ![](./media/change-project-or-resource.png)

### Other new/changed
- **RegEx Pal** - from Main menu \> Advanced or Project menu \> Advanced.
-  **Synchronizing** with Logos and other compatible programs is now turned **on by default**
-   Changes have been made to help with the localization of the help files and the user interface
-  **Bible modules** can now handle **chapter markers** in the extra books

:::tip
Paratext 9.3 Beta will not replace an existing Paratext installation so you can test alongside of another Paratext.
:::

### Download
Go to paratext.org/download/pre-release/
