<script>
  import NumberSpinner from "../../src/index.js";
  let value1 = 100;
  let value2 = 33;
  let logs = [];
</script>

<!-- ------------------------------------- -->

<h3>Touch 2B5</h3>
<p>
  Adding styling possibilities.
</p>

<hr />

<div class="row">
  <NumberSpinner
    bind:value={value1}
    on:consoleLog={(e) => (logs = [{ timestamp: Date.now(), msg: e.detail }, ...logs])}
  />
</div>

<hr />

<div class="row">
  <NumberSpinner bind:value={value2} />
</div>

<hr />

<input type="text" value="Some other normal input field" />

<div class="console">
  {#each logs as log, i}
    {new Date(log.timestamp).toLocaleTimeString("de-DE")}.{(log.timestamp % 1000)
      .toString()
      .padStart(3, "0")} – {log.msg}<br />

    {#if logs[i + 1]?.timestamp < log.timestamp - 200}<br />{/if}
  {/each}
</div>

<!-- ------------------------------------- -->
<style>
  hr {
    margin: 20px 0px;
  }
  div.row {
    padding-top: 30px;
    text-align: center;
  }
  div.console {
    /*margin:0px 40px;*/
    font-size: 9px;
    line-height: 1.2em;
  }
</style>
